Checker = {
	
	bc:false,
	checked:[],
	rowsArr:[],
	colsArr:[],
	
	isRigid: function(bc)
	{
		this.bc = bc;
		
		this.checked = [];
		
		for(var i=0; i<bc.rows; ++i)
		{
			this.checked.push([]);
			
			for(var j=0; j<bc.cols; ++j)
				this.checked[i][j] = false;
		}
		
		this.rowsArr = [];
		for(var i=0; i<bc.rows; ++i)
			this.rowsArr[i] = 0;
		
		this.colsArr = [];
		for(var i=0; i<bc.cols; ++i)
			this.colsArr[i] = 0;
		
		for(var i=0; i<bc.rows; ++i)
			for(var j=0; j<bc.cols; ++j)
				if(bc.bracingArr[i][j])
				{
					this.check(i, j);
					return (this.rowsArr.indexOf(0) == -1 && this.colsArr.indexOf(0) == -1);
				}
		
		return false;
	},//eof
	
	check: function(i,j)
	{
		 this.checked[i][j] = true;
		 
		 if(this.bc.bracingArr[i][j])
		 {
		      this.rowsArr[i]++;
		      this.colsArr[j]++;

		      for(var k = i; k>=0; --k)
		    	  if(!this.checked[k][j])
		    		  this.check(k,j);
		      
		      for(var k = i; k<this.bc.rows; ++k)
		    	  if(!this.checked[k][j])
		    		  this.check(k,j);
		      
		      for(var k = j; k>=0; --k)
		    	  if(!this.checked[i][k])
		    		  this.check(i,k);
		      
		      for(var k = j; k<this.bc.cols; ++k)
		    	  if(!this.checked[i][k])
		    		  this.check(i,k);
		 }
	}//eof
};