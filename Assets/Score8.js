#pragma strict

var customSkin : GUIStyle;
var customSkin1 : GUIStyle;
var i : int;
var died1 : boolean;
var died2 : boolean;
public static var score1 : int;
public static var score2 : int;
var pause1 :boolean;
var pause2 :boolean;
var delay : boolean;


function Start () {
	score1 = Score7.score1;
	score2 = Score7.score2;
	i = Application.loadedLevel;
}

function Update () {
	died1 = Move.died;
	died2 = Move1.died;
	level();
	print("died1 = " +died1);
	print("died2 = " +died2);


}

function level(){
	yield WaitForSeconds(.5);
	if(died1 && !died2 && !pause1){
		score1 = score1 +1;
		pause1 = true;
	}
	if(!died1 && died2 && !pause2){
		score2 = score2 +1;
		pause2 = true;
	}
	if(died1 || died2 && !delay){
		delay = true;
		died1 = false;
		died2 = false;
		Move.died = false;
		Move1.died = false;
		yield WaitForSeconds(5);
		
		Application.LoadLevel(i + 1);
		print("kkkkk");


	}
}

function OnGUI(){
	GUI.Label(Rect(40,590, 100,100),  ""+ score2, customSkin);
	GUI.Label(Rect(1500,590, 100,100),  ""+ score1, customSkin1);
}
		