/* # the sensor value description

# 0  ~300     dry soil

# 300~700     humid soil

# 700~950     in water*/

void setup(){

Serial.begin(9600);

}

void loop(){

int soil_moisture=analogRead(A0);  // read from analog pin A3

Serial.print(“analog value: “);

if(soil_moisture<30) {

Serial.println(“Dry soil”);

}

if((soil_moisture>300)&&(soil_moisture<700)) {

Serial.println(“Humid soil”);

}

if((soil_moisture>700)&&(soil_moisture<950)){

Serial.println(“water”);

}
String request = "GET "+ ip + "sensor.php?value=" + soil_moisture + " HTTP/1.0";
  send_request(request);

  void send_request (String request) {
  Adafruit_CC3000_Client client = cc3000.connectTCP(ip, 8080);
  if (client.connected()) {
    client.println(request);      
    client.println(F(""));
    Serial.println("Connected & Data sent");
  } 
  else {
    Serial.println(F("Connection failed"));
  }
string buffer;
int counter = 0;
while (client.connected()) {
  while (client.available()) {
   buffer[counter++] = client.read();
  }
}
Serial.println("Closing connection");
Serial.println("Buffer value is: " + buffer);
client.close();
}

}


