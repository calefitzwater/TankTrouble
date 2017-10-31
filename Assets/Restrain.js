#pragma strict

function Start () {

}

function Update () {
	if(transform.eulerAngles.x != 0){
		transform.eulerAngles.x = 0;
	}
	if(transform.eulerAngles.z != 0){
		transform.eulerAngles.z = 0;
	}
		if(transform.eulerAngles.y != 0){
		transform.eulerAngles.y = 0;
	}
}