#pragma strict

var timer : boolean;

function Start () {
	Timer();
}

function Update () {
	if(timer){
		Destroy(gameObject);
	}
}

function Timer(){
	yield WaitForSeconds(20);
	timer = true;
}