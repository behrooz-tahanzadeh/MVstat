function WidthChecker()
{
	this.CheckedH = [];
	this.CheckedV = [];
	
	for(var i=0; i<GV.Board.rows; ++i)
	{
		//add new row
		this.CheckedH.push([]);
		this.CheckedV.push([]);
		
		//add new columns
		for(var j=0; j<GV.Board.cols; ++j)
		{
			this.CheckedH.push(false);
			this.CheckedV.push(false);
		}
	}
}


WidthChecker.prototype.run = function()
{
	this.runH();
	this.runV();
};


WidthChecker.prototype.runH = function()
{
	var ctx = GV.Ctx;
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'red';
	
	var w = GV.Board.width;
	var h = GV.Board.height;
	
	for(var i=0; i<GV.Board.rows; ++i)
	{	
		for(var j=0; j<GV.Board.cols; ++j)
		{
			if(!this.CheckedH[i][j])
			{
				if(GV.Board.isVoid(i,j))
				{
					var c = 0;
					
					while(j+c<GV.Board.cols && GV.Board.isVoid(i,j+c))
					{
						this.CheckedH[i][j+c] = true;
						c++;
					}
					
					if(c<5 || c>10)
					{
						ctx.strokeStyle = c<5? 'red':'yellow';
						ctx.beginPath();
						ctx.moveTo(j*w, (i*h)+(h/2));
						ctx.lineTo((j+c)*w, (i*h)+(h/2));
						ctx.stroke();
					}
					
					j += c;
				}
			}
		}
	}
};


WidthChecker.prototype.runV = function()
{
	var ctx = GV.Ctx;
	ctx.lineWidth = 1;
	ctx.strokeStyle = 'red';
	
	var w = GV.Board.width;
	var h = GV.Board.height;
	
	for(var j=0; j<GV.Board.cols; ++j)
	{	
		for(var i=0; i<GV.Board.rows; ++i)
		{
			if(!this.CheckedV[i][j])
			{
				if(GV.Board.isVoid(i,j))
				{
					var c = 0;
					
					while(i+c<GV.Board.rows && GV.Board.isVoid(i+c,j))
					{
						this.CheckedH[i+c][j] = true;
						c++;
					}
					
					if(c<5)
					{
						ctx.beginPath();
						ctx.moveTo((j*w)+(w/2), i*h);
						ctx.lineTo((j*w)+(w/2), (i+c)*h);
						ctx.stroke();
					}
					
					i += c;
				}
			}
		}
	}
};