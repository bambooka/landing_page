let block = document.createElement('div');
let image = document.createElement('img');
let title = document.createElement('h3');
let goods = document.getElementById('goods_list');

for (let i = 0; i <= 9; i++) {
    image.setAttribute('src', 'https://via.placeholder.com/150');
    title.innerHTML ='Example title';
    block.appendChild(image);
    block.appendChild(title);
    goods.appendChild(block);
}