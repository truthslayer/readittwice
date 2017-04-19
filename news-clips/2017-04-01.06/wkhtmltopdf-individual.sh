#!/bin/bash
if [ -z "$1" ]
then
    echo "we should never get here. zero parameters.\n"
    exit 1;
else
    echo "the first name is \"$1\"";
    echo "the second name is \"$2\"";
    echo "the third name is \"$3\"";
fi
name="$1";
pdf="$2";
direct="$3";

hd="/home1/j/jamiemor";
wkh="$hd/wkhtmltox/bin/wkhtmltopdf";
wind="$hd/wkhtmltopdf-individual.sh";
mkdir "$direct"
chmod 777 "$direct"
cp "$wkh" "$direct/";
cp "$wind" "$direct/";

grabpdf () {
    if [ -z "$1" ]
    then
	echo "we should never get here. zero parameters.\n"
	exit 1;
    else
	echo "the variable name is \"$1\""
	B=1;
	while [ "$B" -ne "0" ];
	do
	    tt=`date +%Y-%m-%d.%H:%M:%S`
	    ! "$phant" "$raster" "$1" "$direct/$2-$tt-phantomjs".pdf | grep -q 'TypeError'
	    B=$?;
	    echo "B value is $B\n";
 	    if [ "$1" = "http://www.theguardian.com" ]  || [ "$1" = "http://www.wsj.com" ] || [ "$1" = "http://www.thefiscaltimes.com" ] || [ "$1" = "http://www.huffingtonpost.com" ] || [ "$1" = "http://www.nytimes.com" ] || [ "$1" = "http://www.usatoday.com" ] || [ "$1" = "http://www.thedailycaller.com" ] ||  [ "$1" = "http://www.naturalnews.com" ] ||  [ "$1" = "http://www.theblaze.com" ]
	    then
		B=0;
	    fi
	    if [  "$B" -eq "1" ]
	    then
		rm "$direct/$2-$tt-phantomjs".pdf;
	    fi
	done
    fi
    return 0;
}


grabpdf-new () {
    if [ -z "$1" ]
    then
	echo "we should never get here. zero parameters.\n"
	exit 1;
    else
	echo "the variable name is \"$1\""
	tt=`date +%Y-%m-%d.%H:%M:%S`;
	timeout 100  "$phant"  "$raster"  "$1" "$direct/$2-$tt-phantomjs".pdf;
    fi
    return 0;
}


grabpdf-wkh () {
    if [ -z "$1" ]
    then
	echo "we should never get here. zero parameters.\n"
	exit 1;
    else
	tt=`date +%Y-%m-%d.%H:%M:%S`;
	timeout 140  "$wkh" --javascript-delay 10000 -d 300 -L 0mm -R 0mm -T 0mm -B 0mm --page-width 9in --page-height "$3in" --viewport-size 1280x10024  "$1" "$direct/$2-wkh.pdf";
    fi
    return 0;
}


grabpdf-wkh "$1" "$2" '33';
chmod 777 "$direct/*"
