const table = document.querySelector('.table');
const table2 = document.querySelector('.table2');
const table3 = document.querySelector('.table3');
const gradeAverage = document.querySelector('.averageGrade')

const btn_1A = document.querySelector('._1A');
const btn_1B = document.querySelector('._1B');

const profiles = [
    { name: 'John', class: '1A', grade: 4.5 },
    { name: 'Dave', class: '1B', grade: 4.0 },
    { name: 'Anna', class: '1A', grade: 3.5 },
    { name: 'Zack', class: '1B', grade: 3.3 },
    { name: 'Gift', class: '1A', grade: 4.2 },
    { name: 'Tolu', class: '1B', grade: 2.7 }
];

profiles.map((val) => {
    let tabRow = document.createElement('tr');
    tabRow.setAttribute('class', 'tableRow');

    let tabNameData = document.createElement('td');
    tabNameData.setAttribute('class', 'nameData');
    tabNameData.textContent = val.name;

    let tabClassData = document.createElement('td');
    tabClassData.setAttribute('class', 'ClassData');
    tabClassData.textContent = val.class;

    let tabGradeData = document.createElement('td');
    tabGradeData.setAttribute('class', 'GradeData');
    tabGradeData.textContent = val.grade.toFixed(1);

    tabRow.appendChild(tabNameData);
    tabRow.appendChild(tabClassData);
    tabRow.appendChild(tabGradeData);



    table.appendChild(tabRow);
});

let totalGrade = profiles.reduce((accum, currVal) => accum + currVal.grade, 0);
let avgGrade = totalGrade / profiles.length;

gradeAverage.textContent = avgGrade.toFixed(1);

// Filter 1A

const class_1A = profiles.filter(val => {
    return val.class == "1A";

});

let render1A = ()=>{
    class_1A.forEach(val => {

        table.style.display = 'none';
        table2.style.display = 'block';



        let tabRow = document.createElement('tr');
        tabRow.setAttribute('class', 'tableRow');

        let tabNameData = document.createElement('td');
        tabNameData.setAttribute('class', 'nameData');
        tabNameData.textContent = val.name;

        let tabClassData = document.createElement('td');
        tabClassData.setAttribute('class', 'ClassData');
        tabClassData.textContent = val.class;

        let tabGradeData = document.createElement('td');
        tabGradeData.setAttribute('class', 'GradeData');
        tabGradeData.textContent = val.grade.toFixed(1);

        tabRow.appendChild(tabNameData);
        tabRow.appendChild(tabClassData);
        tabRow.appendChild(tabGradeData);



        table2.appendChild(tabRow);
    })
}

btn_1A.addEventListener('click', render1A);

// Filter 1B
const class_1B = profiles.filter(val => {
    return val.class == "1B";

});

let render1B = () => {

    class_1B.forEach(val => {

        table.style.display = 'none';
        table2.style.display = 'none';
        table3.style.display = 'block';



        let tabRow = document.createElement('tr');
        tabRow.setAttribute('class', 'tableRow');

        let tabNameData = document.createElement('td');
        tabNameData.setAttribute('class', 'nameData');
        tabNameData.textContent = val.name;

        let tabClassData = document.createElement('td');
        tabClassData.setAttribute('class', 'ClassData');
        tabClassData.textContent = val.class;

        let tabGradeData = document.createElement('td');
        tabGradeData.setAttribute('class', 'GradeData');
        tabGradeData.textContent = val.grade.toFixed(1);

        tabRow.appendChild(tabNameData);
        tabRow.appendChild(tabClassData);
        tabRow.appendChild(tabGradeData);



        table3.appendChild(tabRow);
    })
};

btn_1B.addEventListener('click', render1B);