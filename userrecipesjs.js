const form = document.querySelector('#add-ingredient-form')
//getting data
db.collection('ingredients').get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
        renderIngredient(doc); 
    })
})
//saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('ingredients').add({
        ingredient: form.ingredient.value
        amount: form.amount.value
    })
    form.ingredeint.value = '';
    form.amoun.value = '';
})
