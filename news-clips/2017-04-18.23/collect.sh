#!/bin/bash

tody=`date +%Y/`
todm=`date +%Y/%m`
todd=`date +%Y/%m/%d`
tod=`date +%Y/%m/%d/%H`
hd="/home1/j/jamiemor";
nc="$hd/html/news-clips";
directmh="$hd/html/news-clips/$todmh";
direct="$hd/html/news-clips/$tod";
phant="submitphantomtest.vanilla";
phantf="phantom-filler";
wkhf="wkh-filler";
wkh="submitwhktest.vanilla";
condor="/usr/local/bin/condor_submit";
mkdir "$nc/$tody";
chmod 777 "$nc/$tody";
mkdir "$nc/$todm";
chmod 777 "$nc/$todm";
mkdir "$nc/$todd";
chmod 777 "$nc/$todd";
mkdir "$direct";
chmod 777 "$direct";
cp "$hd/phantomjs-individual.sh" "$direct/"; 
cp "$hd/wkhtmltopdf-individual.sh" "$direct/"; 
cp "$hd/collect.sh" "$direct/"; 
cp "$hd/phantomjs/bin/phantomjs" "$direct/";
cp "$hd/html/news-clips/rasterize.js" "$direct/";
cp "$phant" "$direct/"
cp "$wkh" "$direct/"

printf "Executable = phantomjs-individual.sh\\nArguments = http://\$(state) \$(state) $direct\n" > "$phant";
printf "Executable = wkhtmltopdf-individual.sh\\nArguments = http://\$(state) \$(state) $direct\n" > "$wkh";
cat "$phantf" >> "$phant";
cat "$wkhf" >> "$wkh";
"$condor" "$phant";
"$condor" "$wkh";
sleep 300;
chmod 777 "$direct";
cd "$hd";
Dropbox-Uploader/dropbox_uploader.sh upload "$direct" Public/news-clips/"$tod";
#cp change.sh "$direct/";
#cd "$direct";
#./change.sh;
#mv "$direct/*" "$hd/html/news-clips/$direct/";
#cd "$hd/html/news-clips/$direct/";
#find . -name "*.pdf" | xargs -i chmod 777 {};
