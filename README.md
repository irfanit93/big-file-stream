Within the root of the project, copy any large big file from src directory to destination directory at ease using the copy function.
<br/>
<b>UPDATE v 1.0.9:</b>
<br/>
Minor bug fixes for copyFromHttp and updated Readme for more uses of copyFromHttp. see updated examples below:
<br/>
<b>UPDATE v 1.0.8:</b>
<br/>
New function copyFromHttp added.
<br/>
<b>Signature:</b>
<br/>
copyFromHttp = (url:string,{options:Object,data:string or Buffer or Uint8Array,fileName:string,secure:boolean})
<br/>
<b>Usage:</b>
<br/>
By Default your request is sent over secure http connection:
<br/>
you can pass any http url here, the response will be saved in the fileName which is nothing but the last part of the url(in the below case its fileName.txt,1,allusers)
<br/>
copyFromHttp("https://exampledomain.com/fileName.txt");
<br/>
copyFromHttp("https://exampledomain.com/api/1");
<br/>
copyFromHttp("https://exampledomain.com/allusers");
<br/>
if you want to override the fileName, you can give fileName key as second paramter like below:
<br/>
copyFromHttp("https://exampledomain.com/allusers",{fileName:"everyusers.java"});
<br/>
download any software with exact download link of file:
<br/>
copyFromHttp("https://vscode.download.prss.microsoft.com/dbazure/download/stable/<br/>bf9252a2fb45be6893dd8870c0bf37e2e1766d61/VSCodeUserSetup-x64-1.106.3.exe",{fileName:"vscode.exe"});
<br/>
For insecure connections:
<br/>
copyFromHttp("http://exampledomain.com/fileName.txt",{secure:false});
<br/>
The last path value becomes the fileName and will be saved in root project directory as the same.
<br/>
For other than GET request, options parameter is mandatory.
<br/>
For post data, pass the "data" parameter. if it is json, you need to stringify it using JSON.stringify before passing the data.
options parameter is same as the options paramter of http.request method in Node.js.
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




