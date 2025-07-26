#!/bin/bash

# Script to download all images from imgur to local public/images folder
# Run this from the project root

cd apps/app/public/images

echo "Downloading student photos..."
curl -o rishi.png "https://i.imgur.com/QlcED5i.png"
curl -o fengxiao.jpeg "https://i.imgur.com/Eq2tj99.jpeg"
curl -o gilbert.jpeg "https://i.imgur.com/ggHdHgY.jpeg"
curl -o neha.jpeg "https://i.imgur.com/my22uEF.jpeg"
curl -o azure.jpeg "https://i.imgur.com/hLYcRDx.jpeg"
curl -o taryn.jpeg "https://i.imgur.com/BRgeuiE.jpeg"
curl -o irene.jpeg "https://i.imgur.com/BrBdrTR.jpeg"
curl -o temitope.png "https://i.imgur.com/dZ6BL15.png"
curl -o justin.jpeg "https://i.imgur.com/Fxd8lxo.jpeg"
curl -o nada.jpeg "https://i.imgur.com/Isf9Scy.jpeg"
curl -o leah.jpeg "https://i.imgur.com/wN7E7w3.jpeg"
curl -o jorray.jpeg "https://i.imgur.com/hXDMFGT.jpeg"
curl -o layan.jpeg "https://i.imgur.com/azJWF1q.jpeg"
curl -o angelika.jpeg "https://i.imgur.com/8DewcZ5.jpeg"
curl -o kadence.jpeg "https://i.imgur.com/IPGBjI8.jpeg"
curl -o olivia.jpeg "https://i.imgur.com/3lF20XK.jpeg"

echo "Downloading other images..."
curl -o logo.png "https://i.imgur.com/DpZBFXW.png"
curl -o favicon.png "https://i.imgur.com/5LyeXPx.png"
curl -o background.jpeg "https://i.imgur.com/4uJI3la.jpeg"

echo "All images downloaded!"
echo "Total images: $(ls -1 | grep -E '\.(png|jpeg|jpg)$' | wc -l)"