function createClassRoom(numbersOfStudents) {
    function studentSeat() {
        return function(seat) {
            return seat;
        }
    
    }
    // array
    const students = [];
    // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    for (let i = 0; i < numbersOfStudents; i++) {
        let seatNumber = i + 1;
        students.push(studentSeat(seatNumber)());
    }
    return students
}
// Create a closure classRoom, calling createClassRoom with 10 students
const classRoom = createClassRoom(10);
console.log(classRoom);

// execute code
console.log(classRoom[0]());
