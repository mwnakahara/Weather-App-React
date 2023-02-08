Developer's notes

clearfix & floats
watch https://www.youtube.com/watch?v=2tC4PIlEz_o

SheCodes WeatherAPI https://www.shecodes.io/learn/workshops/944/apis/weather

have child component update state, but state definition e.g. city in parent component
--> https://stackoverflow.com/questions/41619166/react-can-a-child-component-send-value-back-to-parent-form
--> https://reactjs.org/docs/lifting-state-up.html

components in ReactJS should be created based on functionality, not layout! (otherwise there'll be trouble with functionality later on / it gets too compliated)

useEffect (() => {
effect
return () => {
cleanup
}
}, [input])

e.g.
useEffect (() => {
setUnit(celsius)},
[unitValue])
