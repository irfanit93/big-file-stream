import fs from "node:fs";
import { mkdir } from "node:fs/promises";

async function run(src, dest) {
  fs.stat(src, async (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }
    let dataSize = stats.size * 1;
    let bytesRead = 0;
    let mbPerSec = bytesRead / 1024;
    let prevBytesRead = 0;
    let updateMbInterval = setInterval(() => {
      mbPerSec = Math.round((bytesRead - prevBytesRead) / (1024 * 1024)) * 2;
      prevBytesRead = bytesRead;
      midTime = new Date();
    }, 500);
    var startTime = new Date(),
      endTime = 0,
      midTime = 0;

    let readStream, writeStream;
    //for(let i=0;i<1;i++){
    try {
      readStream = fs.createReadStream(src, { highWaterMark: 11 * 1048576 });
      
      let lastIndex = dest.lastIndexOf("/");
      if(lastIndex!==-1)
      await mkdir(dest.slice(0, lastIndex), { recursive: true });
      writeStream = fs.createWriteStream(
        lastIndex!==-1 ? (dest.slice(0, lastIndex) + dest.slice(lastIndex)):dest,
        { /*flags:"a",*/ highWaterMark: 350 * 1048576 }
      );
    } catch (error) {
      console.log(error);
    }
    readStream.on("data", (chunk) => {
      bytesRead += chunk.length;
      var runningTime = (midTime - startTime) / 1000;
      process.stdout.write(
        ((bytesRead / dataSize) * 100 + "").substring(0, 6) +
          "% Complete / Speed:" +
          mbPerSec +
          "Mb/sec ----- Running for " +
          parseInt(runningTime / 60) +
          " mins : " +
          parseInt(runningTime % 60) +
          " secs              " +
          "\r"
      );
      process.stdout.moveCursor(0, 0);
    });
    readStream.on("error", () => {
      readStream.close();
    });
    writeStream.on("error", () => {
      writeStream.close();
    });

    writeStream.on("finish", () => {
      endTime = new Date();
      var secsTaken = (endTime - startTime) / 1000;
      process.stdout.clearLine();
      console.log("Total time taken: " + secsTaken + " secs");
      console.log(
        "Avg speed:" +
          Math.round(dataSize / (1024 * 1024) / secsTaken) +
          "Mb/sec"
      );

      clearInterval(updateMbInterval);
    });
    //console.log("Emitting chunks...");
    readStream.pipe(writeStream);
    // }
  });
}

const copy = (src, dest) => {
  run(src, dest).catch(console.error);
};

export default copy;
