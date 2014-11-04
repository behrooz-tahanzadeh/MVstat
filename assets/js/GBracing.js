GBracing = {
	
	canvas:false,
	ctx:false,
	bc: false,
	
	ml:40,
	mt:30,
	w:30,
	h:30,
	
	init: function()
	{
		jQuery(this.canvas).click(this.canvasOnClick);
	},
	
	
	canvasOnClick: function(e)
	{
		var x = e.pageX - jQuery(this).offset().left;
		var y = e.pageY - jQuery(this).offset().top;
		
		x -= GBracing.ml;
		y -= GBracing.mt;
		
		x /= GBracing.w;
		y /= GBracing.h;
		
		x = parseInt(x);
		y = parseInt(y);
		
		GBracing.bc.toggleRod(y,x);
	},//eof
	
	
	
	
	draw: function(bc)
	{	
		this.bc = bc;
		
		this.canvas.width = this.canvas.width;
		
		this.drawRods();
		this.drawTable();
		this.drawRows();
		this.drawCols();
	},//eof
	
	
	
	
	drawRows: function()
	{
		for(var i=0; i<this.bc.rows; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("R "+i,10,(i*30)+50);
		}
	},//eof
	
	
	
	
	drawCols: function()
	{
		for(var i=0; i<this.bc.cols; ++i)
		{
			this.ctx.font="10px Georgia";
			this.ctx.fillText("C "+i,(i*30)+50, 20);
		}
	},//eof
	
	
	
	
	drawTable: function()
	{
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'black';
		
		for(var i=0; i<=this.bc.rows; ++i)
		{
			ctx.moveTo(
					this.ml,	
					i*this.h + this.mt	
					);
			
			ctx.lineTo(
					(this.bc.cols*this.w) + this.ml,	
					i*this.h + this.mt
					);
		}
		
		for(var i=0; i<=this.bc.cols; ++i)
		{
			ctx.moveTo(
					i*this.w + this.ml,
					this.mt
					);
			
			ctx.lineTo(
					i*this.w + this.ml,	
					(this.bc.rows*this.h) + this.mt
					);
		}
		
		ctx.stroke();
	},//eof
	
	
	
	
	drawRods: function()
	{
		
		
		for(var i=0; i<this.bc.rows; ++i)
			for(var j=0; j<this.bc.cols; ++j)
				this.drawRod(i,j);
	},//eof
	
	
	
	
	drawRod: function(i,j)
	{	
		if(this.bc.bracingArr[i][j])
		{
			var ctx = this.ctx;
			ctx.beginPath();
			
			ctx.strokeStyle = 'red';
			
			ctx.moveTo(
					j*this.w + this.ml,	
					i*this.h + this.mt
					);
			
			ctx.lineTo(
					(j+1)*this.w + this.ml,	
					(i+1)*this.h + this.mt
					);
			
			ctx.stroke();
		}
	}//eof
	
	
	
	
};