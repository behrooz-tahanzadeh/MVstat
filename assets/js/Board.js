function Board(r,c,w,h)
{
	this.width = w;
	this.height = h;
	
	this.rows = r;
	this.cols = c;
	
	this.massArr = [];
	
	for(var i=0; i<r; ++i)
	{
		//add new row
		this.massArr.push([]);
		
		//add new columns
		for(var j=0; j<c; ++j)
			this.massArr[i].push(false);
	}
	
	this.massCount = 0;
}




Board.prototype.drawCell = function(i,j,m)
{
	if(m == undefined)
		m = this.massArr[i][j];
	
	var ctx = GV.Ctx;
	
	if(m)
	{
		ctx.fillStyle = 'black';
		ctx.fillRect(j*this.width, i*this.height, this.width, this.height);
	}
	else
	{
		ctx.fillStyle = 'white';
		ctx.fillRect(j*this.width, i*this.height, this.width, this.height);
		ctx.fillStyle = '#ddd';
		ctx.fillRect(j*this.width+2, i*this.height+2, this.width-4, this.height-4);
	}
};




Board.prototype.draw = function()
{
	for(var i=0; i<this.rows; ++i)
		for(var j=0; j<this.cols; ++j)
			this.drawCell(i,j,this.massArr[i][j]);
};




Board.prototype.makeMass = function(i,j)
{
	if(!this.massArr[i][j])
	{
		this.massArr[i][j] = true;
		this.drawCell(i, j, true);
		this.massCount++;
		jQuery('#massCount').html(this.massCount);
	}
};




Board.prototype.makeVoid = function(i,j)
{
	if(this.massArr[i][j])
	{
		this.massArr[i][j] = false;
		this.drawCell(i, j,false);
		this.massCount--;
		jQuery('#massCount').html(this.massCount);
	}
};



Board.prototype.isVoid = function(i,j)
{
	if(i<this.rows && i>=0 && j<this.cols && j>=0)
		return !this.massArr[i][j];
	else
		return false;
};