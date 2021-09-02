//FrameTimer v1.1 by Szymon Nowacki 2021

class FrameTimer
{
	static lastFrameStart = 0;
	static lastFrameTime = 1;
	static lastDrawTime = 1;
	static fps = 0;
	static loadFactor = 0;
	static frameNum = 0;
	static hasDrawEnd = false;

	static drawStart()
	{
		this.frameNum++;
		this.lastFrameTime = millis() - this.lastFrameStart;
		this.lastFrameStart = millis();
		this.fps = Math.round(1000 / this.lastFrameTime,2);
		this.loadFactor = Math.round(this.lastFrameTime / this.lastDrawTime,2);
	}

	static drawEnd()
	{
		this.hasDrawEnd = true;
		this.lastDrawTime = millis() - this.lastFrameStart;
	}

	static logAll()
	{
		console.log("------------------------");
		console.log("Frame: " + this.frameNum);
		console.log("FPS: " + this.fps);
		if(this.hasDrawEnd) console.log("Load factor: " + this.loadFactor + "%");
		console.log("Frame time: " + this.lastFrameTime);
		if(this.hasDrawEnd) console.log("Draw time: " + this.lastDrawTime);
		console.log("------------------------");
	}

	static showInfo(color = color(0,0,0,0))
	{
		fill(color);
		noStroke();
		rect(width-70,0,100,100);

		stroke(128);
		fill(128);
		textSize(10);
		strokeWeight(0.5);
		textAlign(RIGHT,TOP);
		text(this.fps + "fps", width-25,5);
		if(this.hasDrawEnd) text("LF: " + this.loadFactor + "%", width-25,20);
	}
}