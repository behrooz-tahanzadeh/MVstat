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
	
	
	
	
	windowOnKeyDown: function(e)
	{
		switch (e.keyCode)
		{
		case Keyboard.Right:
			var v = parseFloat(jQuery('input#tail').val())+(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Left:
			var v = parseFloat(jQuery('input#tail').val())-(e.shiftKey?0.1:0.01);
			jQuery('input#tail').val(v);
			Main.tailChange(null);
			
			break;
			
		case Keyboard.Space:
			Main.pp();
			break;
		
		default:
			console.log(e.keyCode);
		}
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