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
<br/>
<b>Highlights:</b>
<br/>
No dependencies
<br/>
Small 3Kb
<br/>
See live completed percentage, transfer speed and Time take to copy in console directly
<br/>

<b>Whats supported as of now:</b>
<br/>
Support only copying single file in single call
<br/>
Avoids memory leak by closing both read and write stream on error
<br/>

<b>Future Update:</b>
<br/>
Data streaming
<br/>
Multiple file streaming
<br/>

<b>Tested in Node js 20</b>




