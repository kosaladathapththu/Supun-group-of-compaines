Add-Type -AssemblyName System.Drawing
$assetRoot = Join-Path (Get-Location).Path 'src/assets'
$optimizedRoot = Join-Path $assetRoot 'optimized'
New-Item -ItemType Directory -Force -Path $optimizedRoot | Out-Null
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$photoFiles = Get-ChildItem -LiteralPath $assetRoot -File | Where-Object { $_.Extension -match '^\.(jpg|jpeg|png)$' -and $_.Name -notmatch 'logo|brand|map|certification|illustrator|Chairman' }
$manifest = @()
foreach ($photoFile in $photoFiles) {
 $original = [System.Drawing.Image]::FromFile($photoFile.FullName)
 try {
  $scaleRatio = [Math]::Min(1, 1400.0 / [Math]::Max($original.Width,$original.Height))
  $imageWidth = [Math]::Max(1,[int]($original.Width * $scaleRatio))
  $imageHeight = [Math]::Max(1,[int]($original.Height * $scaleRatio))
  $bitmap = New-Object System.Drawing.Bitmap($imageWidth,$imageHeight)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  try {
   $graphics.Clear([System.Drawing.Color]::White)
   $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
   $graphics.DrawImage($original,0,0,$imageWidth,$imageHeight)
   $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
   $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]82)
   $targetName = $photoFile.BaseName + '.jpg'
   $targetPath = Join-Path $optimizedRoot $targetName
   $bitmap.Save($targetPath,$jpegCodec,$encoderParams)
   $manifest += [PSCustomObject]@{ source=$photoFile.Name; target=$targetName; before=$photoFile.Length; after=(Get-Item -LiteralPath $targetPath).Length }
   $encoderParams.Dispose()
  } finally { $graphics.Dispose(); $bitmap.Dispose() }
 } finally { $original.Dispose() }
}
$manifest | ConvertTo-Json | Set-Content tmp/photo-optimization.json
$originalBytes = ($manifest | Measure-Object -Property before -Sum).Sum
$optimizedBytes = ($manifest | Measure-Object -Property after -Sum).Sum
Write-Output "Prepared $($manifest.Count) photos: $([Math]::Round($originalBytes/1MB,1)) MB to $([Math]::Round($optimizedBytes/1MB,1)) MB"
