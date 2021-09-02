class Mass
{
	constructor(x,y,mass,color,size,id, vel)
	{
		this.x = x;
		this.y = y;
		this.mass = mass;
		this.color = color;
		this.vel = createVector(0,vel);
		this.size = size;
		this.id = id;
		this.pastPositions = new Array();
		this.trailLen = 500;
		this.lastTrailSave = 0;
	}

	show()
	{
		stroke(this.color);
		Zoomer.point(this.x,this.y, this.size);

		for (var i = 0; i < this.pastPositions.length-1; i++) {
			Zoomer.line(this.pastPositions[i].x,this.pastPositions[i].y,this.pastPositions[i+1].x,this.pastPositions[i+1].y, 0.5)
		}
	}

	getGVector()
	{
		let vector = createVector(0,0);
		for (var i = 0; i < bodies.length; i++) {
			if(this.id == bodies[i].id)
				continue;
			let thisPos = createVector(this.x,this.y);
			let samplePos = createVector(bodies[i].x, bodies[i].y)
			let dir = (samplePos.copy().sub(thisPos)).normalize();
			let distSq = thisPos.copy().sub(samplePos).mult(SCALE).magSq();
			let force = dir.mult(g*(this.mass*bodies[i].mass)/(distSq))
			vector.add( force );

		}
		return vector;
	}

	accelerate()
	{
		let acceleration = this.getGVector().div(this.mass);
		this.vel.add(acceleration.mult(timeConstant));
	}

	move()
	{
		this.accelerate();

		if(millis() - this.lastTrailSave > 10)
		{
			this.lastTrailSave = millis();
			this.pastPositions.push(createVector(this.x,this.y));
			if(this.pastPositions.length > this.trailLen)
			{
				this.pastPositions.shift();
			}
		}

		// console.log(this.id);
		// console.log(this.x);
		// console.log(this.y);
		// console.log(' ');
		this.x += this.vel.x * timeConstant / SCALE;
		this.y += this.vel.y * timeConstant / SCALE;
	}
}