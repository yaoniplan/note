# Variables
```bash
# Comments
# Define
fileName=".png"
# Access
echo $fileName
```
# Print
```bash
echo "Hello, world!"
```
# Read
```bash
read -p "What is your name?" name
```
# Redirect
```bash
echo "Hello, world!" > ~/test.md
```
# Background
```bash
notify-send "Time is up!" &
```
# Control structures
## Conditions
```bash
currentTime="17"
if [ $currentTime -eq 17 ]
then
    echo "currentTime is equal to 17:00"
else
    echo "currentTime is not equal to 17:00"
fi
```
## Loops
```bash
for i in {1..5}
do
    echo "iteration $i"
done
```
# Functions
```bash
fileName=".png"
# The function
sendToClipboard() {
    echo -n "![$fileName](./assets/$fileName)" | xclip -selection clipboard
}
# Call it
sendToClipboard
```
