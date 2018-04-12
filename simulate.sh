#!/bin/bash

while :
do
	sleep $[ ( $RANDOM % 10 )  + 1 ]s
	#generate unit_id
	unit_id="unit_"+$RANDOM
	#generate timestamp accurate to milliseconds
	val=`python -c 'from datetime import datetime; print datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S.%f")'`
	timestamp=${val/%???/}
	#generate random temp between 40 and 80 degrees
	temp=`python -c 'import random; print(random.randint(40, 80))'`
	#send post request
	curl -d "identifier=$unit_id&temp=$temp&timestamp=$timestamp" -X POST http://localhost:3000/sensor
done
