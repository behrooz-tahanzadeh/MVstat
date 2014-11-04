Main = 
{	
	bracingConsole:false,
	
	
	
	
	init:function()
	{	
		GV.Canvas = jQuery('canvas').get(0);
		GV.Ctx = GV.Canvas.getContext('2d');
		
		GV.Board = new Board(60, 80, 10, 10);
		GV.Board.draw();
	},
	
	
	
	
	runTool: function(i,j)
	{
		switch (GV.Tool)
		{
		case 'void':
			GV.Board.makeVoid(i,j);
			break;
			
		case 'mass':
			GV.Board.makeMass(i,j);
			break;
			
		case 'flag':
			new Flag(i,j).draw();
			break;
			
		case 'walker':
			new Walker(i,j).draw();
			break;

		default:
			break;
		}
	},
	
	canvasOnClick: function(e)
	{
		var j = parseInt(e.pageX/GV.Board.width);
		var i = parseInt(e.pageY/GV.Board.height);
		
		Main.runTool(i,j);
	},
	
	canvasOnMMove:function(e)
	{	
		if(e.ctrlKey)
		{
			var j = parseInt(e.pageX/GV.Board.width);
			var i = parseInt(e.pageY/GV.Board.height);
			
			Main.runTool(i,j);
		}
	}
	
};//eo Main{}


jQuery(document).ready(function(){
	Main.init();
});