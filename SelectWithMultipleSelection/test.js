// Add a click event listener to the dropdown icon
nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
        id: 2,
        name: 'root2',
        children: [
          { id: 2, name: 'child3' },
          { id: 3, name: 'child4' }
        ]
      }
  ];

document.getElementById('dropdownIcon').addEventListener('click', function () {
    const optionsList = document.getElementById('optionsList');

    // Toggle the display of the options list
    if (optionsList.style.display === 'block') {
        optionsList.style.display = 'none';
    } else {
        optionsList.style.display = 'block';
    }
});

// Add click event listeners to the checkboxes in the options list
const checkboxes = document.querySelectorAll('.options-list input[type="checkbox"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const isChecked = this.checked;

        if (this.parentElement.tagName === 'LI') {
            // Check/uncheck all child checkboxes when a parent checkbox is clicked
            const childCheckboxes = this.parentElement.querySelectorAll('input[type="checkbox"]');
            childCheckboxes.forEach(childCheckbox => {
                childCheckbox.checked = isChecked;
            });

            // Check/uncheck the parent checkbox if all children are selected/deselected
            const parentCheckbox = this.parentElement.querySelector('input[type="checkbox"]');
            const allChildrenChecked = Array.from(childCheckboxes).every(child => child.checked);
            parentCheckbox.checked = allChildrenChecked;
        }

        updateSelectedFruits();
    });
});

// Update the selected fruits textbox
function updateSelectedFruits() {
    const selectedFruits = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.value !== 'fruits' && checkbox.value !== 'vegetables') {
            selectedFruits.push(checkbox.value);
        }
    });
    const selectedFruitsTextbox = document.getElementById('selectedFruits');
    selectedFruitsTextbox.value = selectedFruits.join(', ');
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    filterOptions();
  });

  function filterOptions() {
    // const optionsList = document.getElementById('optionsList');
    const searchTerm = searchInput.value.toLowerCase();
    // const listItems = optionsList.querySelectorAll("li");
    const selectedFruitsTextbox = document.getElementById('selectedFruits');
    const list1=[];
    nodes.forEach(function (item) {
    //   const label = item.textContent.toLowerCase();
    //   console.log(item.children);
      item.children.forEach(function(SubChild){
        console.log(SubChild.name);

        const subchildLower=SubChild.name.toLowerCase();
        if (subchildLower.includes(searchTerm)) {
            console.log(subchildLower);
            list1.push(SubChild.name);

      }
      
    }); 
    console.log(list1);    
    selectedFruitsTextbox.value = list1.join(',');
 
    });
    if (label.includes(searchTerm)) {
        // list1.push(item.textContent);
        //         selectedFruitsTextbox.value = list1.join(',');
        
        //         // item.style.display = "block";
        //       } else {
        //         // item.style.display = "none";
        //       }
    // console.log(list1);
  }}
  
//   const checkboxes = document.querySelectorAll('.options-list input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
          const isChecked = this.checked;
  
          if (this.parentElement.tagName === 'LI') {
              // Check/uncheck all child checkboxes when a parent checkbox is clicked
              const childCheckboxes = this.parentElement.querySelectorAll('input[type="checkbox"]');
              childCheckboxes.forEach(childCheckbox => {
                  childCheckbox.checked = isChecked;
              });
  
              // Check/uncheck the parent checkbox if all children are selected/deselected
              const parentCheckbox = this.parentElement.querySelector('input[type="checkbox"]');
              const allChildrenChecked = Array.from(childCheckboxes).every(child => child.checked);
              parentCheckbox.checked = allChildrenChecked;
          }
  
          updateSelectedFruits();
      });
  });
