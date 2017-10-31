#pragma strict

var Missle : Transform;
var Muzzle : GameObject;
var delay : boolean;
var ammo : int;
public static var died : boolean;

function Start () {
 ammo = 3;
 died = false;
}

function Update () {
	if(Input.GetKey(KeyCode.UpArrow)){
		rigidbody.AddForce(transform.forward * -13);
	}
	if(Input.GetKey(KeyCode.DownArrow)){
		rigidbody.AddForce(transform.forward * 13);
	}
	if(Input.GetKey(KeyCode.LeftArrow)){
		rigidbody.AddTorque(transform.up * -3);
	}
	if(Input.GetKey(KeyCode.RightArrow)){
		rigidbody.AddTorque(transform.up * 3);
	}
	if(Input.GetKey("m") && !delay && ammo>0){
		var missle = Instantiate(Missle, Muzzle.transform.position, Muzzle.transform.rotation);
		missle.rigidbody.AddForce(transform.forward * -350);
		ammo = ammo -1;
		delay = true;
		Delay();
	}
}

function Delay(){
	if(delay){
		yield WaitForSeconds(.5);
		delay = false;
	}
}
function OnTriggerEnter(other : Collider){
	if(other.tag == "Missile"){
		Destroy(other.gameObject);
		Destroy(gameObject);
		died = true;
	}
}