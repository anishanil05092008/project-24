class Stone{
	constructor(x,y){
 
	var options = {
     
		restitution : 0.8,
		friction:0.9,
		density:12
      
	}
         
	
	
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,  options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			rect(0,0,150,120);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball

			pop()
	}}

