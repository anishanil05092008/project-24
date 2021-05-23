class Iron{
	constructor(x,y){
 
	var options = {
     
		restitution : 0.8,
		friction:3,
		density:30
	}
         
	
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, rubberpos.y);
			rectMode(CENTER)
			rect(0,0,500,200)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}}

