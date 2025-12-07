Within the root of the project, copy any large big file from src directory to destination directory at ease using the copy function.
<br/>
Usage in app:
<br/>
import copy from "big-file-stream";
<br/>
copy("data/anyexistingfile.txt","data1/data2/data3/newcopy.txt");
<br/>
<b>Signature of copy function:</b><br/>
copy(sourceFilePath,destinationFilePath)

Highlights:
No dependencies
Small 3Kb
See live completed percentage, transfer speed and Time take to copy in console directly

Whats supported as of now:
Support only copying single file in single call
Avoids memory leak by closing both read and write stream on error

Future Update:
Data streaming
Multiple file streaming

Tested in Node js 20




