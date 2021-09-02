//Zoomer v1.0 by Szymon Nowacki 2021


 class Zoomer 
{

	static scale = 0.1;
	static Xtrans = 0;
	static Ytrans = 0;

	static init(cnv)
	{
		this.Xtrans = width/2;
		this.Ytrans = height/2;

		cnv.mouseWheel(this.scroll);
		cnv.mouseMoved(this.drag);
	}

	// if sW specified, strokeWeight will be compensated for scale
	static point(x,y, sW = 0){
		push();
		translate(width/2,height/2);
		scale(this.scale);
		translate(-this.Xtrans,-this.Ytrans);
		if(sW > 0)
		{
			strokeWeight(sW / this.scale)
		}
		point(x,y);
		pop();
	}

	// if sW specified, strokeWeight will be compensated for scale
	static line(x1,y1,x2,y2, sW = 0){
		push();
		translate(width/2,height/2);
		scale(this.scale);
		translate(-this.Xtrans,-this.Ytrans);
		if(sW > 0)
		{
			strokeWeight(sW / this.scale)
		}
		line(x1,y1,x2,y2);
		pop();
	}

	static rect(x,y,w,h){
		push();
		translate(width/2,height/2);
		scale(this.scale);
		translate(-this.Xtrans,-this.Ytrans);
		rect(x,y,w,h);
		pop();
	}

	static ellipse(x,y,w,h){
		push();
		translate(width/2,height/2);
		scale(this.scale);
		translate(-this.Xtrans,-this.Ytrans);
		ellipse(x,y,w,h);
		pop();
	}

	static text(txt,x,y){
		push();
		translate(width/2,height/2);
		scale(this.scale);
		translate(-this.Xtrans,-this.Ytrans);
		text(txt,x,y)
		pop();
	}



	static scroll(event) {
	  if (event.deltaY > 0) {
	    Zoomer.scale = Zoomer.scale * 1.1;
	  } else {
	    Zoomer.scale = Zoomer.scale / 1.1;
	  }
	}	

	static drag(event)
	{
		if(mouseIsPressed)
		{
		Zoomer.Xtrans -= event.movementX/Zoomer.scale;
		Zoomer.Ytrans -= event.movementY/Zoomer.scale;
		}
	}
}