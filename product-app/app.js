class Product {
    constructor(name, price, year) {
        this.name = name
        this.price = price
        this.year = year
    }
}

class UI {
    addProduct(product) {
        const element = document.createElement('div')
        element.className = "card text-center mb-2"
        element.innerHTML = `
            <div class="card-body">
                <strong>Name</strong>: ${product.name}
                <strong class="ml-2">Price</strong>: ${product.price}
                <strong class="ml-2">Year</strong>: ${product.year}
                <a href=# class="btn btn-danger ml-2" name="delete"><i class="far fa-trash-alt"></i></a>
            </div>
        `
        const productList = document.getElementById('product-list')
        productList.appendChild(element)
    }

    deleteProduct(element) {
        if (element.matches('.btn')) {
            element.parentElement.parentElement.remove()
            this.showMessage('delete')
        }  else if (element.matches('.far')) {
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('delete')
        } else {
        }
    }

    showMessage(type) {
        switch (type) {
            case 'add':
                alertify.success('Product added successfully')
                break
            case 'delete':
                alertify.error('Product deleted successfully')
                break
            case 'empty':
                alertify.warning('Fill fields please')
                break
            default:
                break
        }
    }

    resetForm() {
        document.getElementById('product-form').reset()        
    }
}

// DOM Handlers
const submitEvent = (e) => {
    const name = document.getElementById('product-name').value.trim()
    const price = document.getElementById('product-price').value.trim()
    const year = document.getElementById('product-year').value.trim()
    const product = new Product(name, price, year)

    const ui = new UI()
    if (name && price && year) {
        ui.addProduct(product)
        ui.resetForm()
        ui.showMessage('add')
    } else {
        ui.showMessage('empty')
    }

    e.preventDefault()
}

 const deleteEvent = (e) => {
     const ui = new UI()
     ui.deleteProduct(e.target)     
 }

// DOM Events
document.getElementById('product-form').addEventListener('submit', submitEvent)
document.getElementById('product-list').addEventListener('click', deleteEvent)

