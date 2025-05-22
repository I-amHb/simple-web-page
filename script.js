const table = document.querySelector('.table');
const gradeAverage = document.querySelector('.averageGrade')
const imgDiv = document.querySelector('.img_div');

const btn_1A = document.querySelector('._1A');
const btn_1B = document.querySelector('._1B');

const profiles = [
    { name: 'Anna William', class: '1A', grade: 3.5, path: './profiles/anna.jpeg' },
    { name: 'David Banner', class: '1B', grade: 4.0, path: './profiles/david.jpeg' },
    { name: 'Gift Present', class: '1A', grade: 4.2, path: './profiles/gift.jpeg' },
    { name: 'John Doe', class: '1A', grade: 3.0, path: './profiles/john.jpg' },
    { name: 'Tolu Jacob', class: '1B', grade: 4.5, path: './profiles/tolu.jpg' },
    { name: 'Zack black', class: '1B', grade: 3.7, path: './profiles/zack.jpeg' }

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

let render1A = () => {

    table.innerHTML = `
  <tr>
    <td class="table-head">Name</td>
    <td class="table-head">Class</td>
    <td class="table-head">Grade(GPA)</td>
  </tr>
`;
    class_1A.forEach(val => {



        let tabRow = document.createElement('tr');

        let tabNameData = document.createElement('td');
        tabNameData.textContent = val.name;

        let tabClassData = document.createElement('td');
        tabClassData.textContent = val.class;

        let tabGradeData = document.createElement('td');
        tabGradeData.textContent = val.grade.toFixed(1);

        tabRow.appendChild(tabNameData);
        tabRow.appendChild(tabClassData);
        tabRow.appendChild(tabGradeData);



        table.appendChild(tabRow);


    })
}

btn_1A.addEventListener('click', render1A);

// Filter 1B
const class_1B = profiles.filter(val => {
    return val.class == "1B";

});

let render1B = () => {

    table.innerHTML = `
  <tr>
    <td class="table-head">Name</td>
    <td class="table-head">Class</td>
    <td class="table-head">Grade(GPA)</td>
  </tr>
`;

    class_1B.forEach(val => {



        let tabRow = document.createElement('tr');

        let tabNameData = document.createElement('td');
        tabNameData.textContent = val.name;

        let tabClassData = document.createElement('td');
        tabClassData.textContent = val.class;

        let tabGradeData = document.createElement('td');
        tabGradeData.textContent = val.grade.toFixed(1);

        tabRow.appendChild(tabNameData);
        tabRow.appendChild(tabClassData);
        tabRow.appendChild(tabGradeData);



        table.appendChild(tabRow);
    })
};

btn_1B.addEventListener('click', render1B);

// Images

profiles.map((val) => {

    let imageCard = document.createElement('div');
    imageCard.setAttribute('class', 'img_card');

    let img = document.createElement('img');
    img.setAttribute('src', val.path)
    img.setAttribute('alt', 'image of student');

    let imgName = document.createElement('p');
    imgName.setAttribute('class', 'title');
    imgName.textContent = val.name;

    imageCard.appendChild(img);
    imageCard.appendChild(imgName);

    imgDiv.append(imageCard);
})