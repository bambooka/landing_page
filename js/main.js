let goods = document.getElementById('goods_list');

let content = {
    infoblock: [
        {
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
        {
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },
{
            title: 'example',
            img: 'https://via.placeholder.com/150'
        },

    ]
};



content.infoblock.forEach(function (item){
    let block = document.createElement('div');
    let image = document.createElement('img');
    image.setAttribute('src', item.img);
    block.appendChild(image);
    let title = document.createElement('h3');
    title.innerHTML = item.title;
    block.appendChild(title);
    goods.appendChild(block);
    block.className = 'goods_item';
});
