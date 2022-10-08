const tbl = document.getElementById('table')
const tblBodyInfo = document.createElement('tbody')
const addButton = document.getElementById('submit')
let products = []

function removeRow() {
  obj = document.getElementById('table-body');
  if (!obj) return
  rws = obj.getElementsByTagName('TR');
  if (rws.length === 0) return
  obj.removeChild(rws[rws.length - 1]);
}

addButton.addEventListener("click", addProduct);

function addProduct(event) {
  let product = {
    'quantity': 0,
    'description': '',
    'price': 0,
    'total': 0
  }
  const quantity = document.getElementById('quantity')
  const description = document.getElementById('description')
  const price = document.getElementById('price')
  event.preventDefault()
  if ((quantity.value === '') || (description.value === '') || (price.value === '')) {
    return alert('Los valos son requeridos')
  }
  product.quantity = quantity.value
  product.description = description.value
  product.price = parseInt(price.value)
  product.total = parseFloat(price.value) * parseInt(quantity.value)
  products.push(product)
  addRow(product)
}

function addRow(product) {
  const row = document.createElement('tr')
  const values = Object.values(product)
  removeRow()
  for (let j = 0; j < 4; j++) {
    const cell = document.createElement('td')
    const cellText = document.createTextNode(values[j])
    cell.appendChild(cellText);
    row.appendChild(cell);
  }

  const rowTotal = document.createElement('tr')
  const cellTotal = document.createElement('td')
  const cellCol1 = document.createElement('td')
  const cellCol2 = document.createElement('td')
  const cellTitle = document.createElement('td')
  let value = ''
  const total = products.reduce((value, product) => {
    return value + product.total
  }, 0)
  // cellTotal.appendChild(document.createTextNode(''));
  value = document.createTextNode('')
  cellCol1.appendChild(value)
  rowTotal.appendChild(cellCol1);
  // cellTotal.appendChild(document.createTextNode(''));
  value = document.createTextNode('')
  cellCol2.appendChild(value)
  rowTotal.appendChild(cellCol2);
  // cellTotal.appendChild(document.createTextNode('TOTAL'));
  value = document.createTextNode('TOTAL')
  cellTitle.appendChild(value)
  rowTotal.appendChild(cellTitle);
  // cellTotal.appendChild(cellTotalText);
  value = document.createTextNode(total)
  cellTotal.appendChild(value)
  rowTotal.appendChild(cellTotal);

  tblBodyInfo.appendChild(row)
  tblBodyInfo.appendChild(rowTotal)
  tblBodyInfo.setAttribute('id', 'table-body')
  tbl.appendChild(tblBodyInfo);
}
