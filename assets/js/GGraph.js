GGraph = {
		
	canvas:false,
	ctx:false,
	bc: false,
	
	ml:40,
	mt:30,
	w:200,
	h:50,
	
	
	
	
	init: function()
	{
		
	},//eof
	
	
	
	
	draw: function(bc)
	{
		this.bc = bc;
		
		this.canvas.width = this.canvas.width;
		
		this.drawRods();
		this.drawRows();
		this.drawCols();
	},//eof
	
	
	
	
	drawRows: function()
	{
		for(var i=0; i<this.bc.rows; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("R "+i,10,(i*this.h)+this.mt);
		}
	},//eof
	
	
	
	
	drawCols: function()
	{
		for(var i=0; i<this.bc.cols; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("C "+i,this.ml+this.w,(i*this.h)+this.mt);
		}
	},//eof
	
	
	
	
	drawRods: function()
	{
		for(var i=0; i<this.bc.rows; ++i)
			for(var j=0; j<this.bc.cols; ++j)
				if(this.bc.bracingArr[i][j])
					this.drawRod(i,j);
	},//eof
	
	
	
	
	drawRod: function(i,j)
	{	
		var ctx = this.ctx;
		ctx.beginPath();
		
		ctx.strokeStyle = 'red';
		
		ctx.moveTo(
				this.ml,	
				i*this.h + this.mt
				);
		
		ctx.lineTo(
				this.ml + this.w,	
				j*this.h + this.mt
				);
		
		ctx.stroke();
	}
};