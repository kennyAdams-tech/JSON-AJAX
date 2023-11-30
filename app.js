document.getElementById('button1').addEventListener('click', loadCustomer)

// single customer

function loadCustomer(e) {
    //create an XHR object
    const xhr = new XMLHttpRequest() 
    //OPEN
    xhr.open('GET', 'customer.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)
            const customer = JSON.parse(this.responseText)

            const output = `
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${customer.id}</li>
                <li class="list-group-item">Name: ${customer.name}</li>
                <li class="list-group-item">Phone: ${customer.phone}</li>
                <li class="list-group-item">Company: ${customer.company}</li>
            </ul>
            
            `
            document.getElementById('customer').innerHTML = output
        }
    }


    xhr.send()
}


//customers
document.getElementById('button2').addEventListener('click', loadCustomers)


function loadCustomers(e) {
    //create an XHR object
    const xhr = new XMLHttpRequest() 
    //OPEN
    xhr.open('GET', 'customers.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)
            const customers = JSON.parse(this.responseText)

            let output = ''
            customers.forEach(function (customer) {
                output += `
                    <ul class="list-group my-5 list-group-flush ">
                        <li class="list-group-item">Id: ${customer.id}</li>
                        <li class="list-group-item">Name: ${customer.name}</li>
                        <li class="list-group-item">Phone: ${customer.phone}</li>
                        <li class="list-group-item">Company: ${customer.company}</li>
                    </ul>
            
            `
            });

            document.getElementById('customers').innerHTML = output
        }
    }


    xhr.send()
}
