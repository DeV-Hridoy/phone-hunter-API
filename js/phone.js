const loadphone = async (searchText , isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones,isShowAll);
}


const displayPhones = (phones,isShowAll) =>{
    // console.log(phones);

    // step 1 
    const phoneContainer = document.getElementById('phone-container');

    // clear phone container cards before adding new cards

    phoneContainer.textContent = '';

    // display show all button if there are more than 9 phones
    const showAllContainer = document.getElementById('show-all-phones');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }


    // display 9 phones if not show all
    if(!isShowAll){
        phones = phones.slice(0,9);
    }

    phones.forEach(phone => {
        console.log(phone);
        //step 2 create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card card-compact bg-gray-100 shadow-xl';

        //step 3 set innerHtml
        phoneCard.innerHTML= `<figure><img class="p-5" src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>`;

        // step 4 append child

        phoneContainer.appendChild(phoneCard);

    })

    // hide loading spinner
    toggleLoddingSpinner(false);
}

// Handel search Button
const handelSearch = (isShowAll)=>{
    toggleLoddingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadphone(searchText);
}


// another search button (recap)

const handelSearch2 = ()=>{
    toggleLoddingSpinner(true)
    const searchField = document.getElementById('search-field2');
    const searchText = searchField.value;
    loadphone(searchText,isShowAll);
}


// loading spinner

const toggleLoddingSpinner = (isLoading)=>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }else{
        loadingSpinner.classList.add('hidden')
    }
}

// handel show all

const handelShowAll = () => {
    handelSearch(true);
}