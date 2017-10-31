#pragma strict

var customSkin : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
		GUI.skin = customSkin;
	   if (GUI.Button (Rect (Screen.width/2-175,Screen.height/2-50,350, 65), "Start")) {
        Application.LoadLevel("Maze1");
    }
}