const ProductList = React.createClass({
  getInitialState: function () {
    return {
      products: [],
    };
  },
  componentDidMount: function () {
    this.updateState();
  },
  updateState: function () {
    const products = Data.sort((a, b) => {
      return b.votes - a.votes;
    });
    this.setState({ products: products });
  },
  handleUpVote: function (productId) {
    Data.forEach((el) => {
      if (el.id === productId) {
        el.votes = el.votes + 1;
        return;
      }
    });
    this.updateState();
  },
  handleDownVote: function(productId) {
    Data.forEach((el) => {
      if(el.id === productId) {
        el.votes = el.votes - 1;
        return;
      }
    });
    this.updateState();
  },
  render: function () {
    const products = this.state.products.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          url={product.url}
          votes={product.votes}
          submitter={product.submitter}
          submitter_avatar_url={product.submitter_avatar_url}
          product_image_url={product.product_image_url}
          onUpVote={this.handleUpVote}
          onDownVote={this.handleDownVote}
        />
      );
    });
    return (
      <div className='ui items'>
        {products}
      </div>
    );
  },
});


const Product = React.createClass({
  handleUpVote: function () {
    this.props.onUpVote(this.props.id);
  },
  handleDownVote: function() {
    this.props.onDownVote(this.props.id);
  },
  render: function () {
    return (
      <div className='item'>

        <div className='image'>
          <img src={this.props.product_image_url} />
        </div>
        <div className='middle aligned content'>
          <div className='ui grid'>
            <div className='three wide column'>
              <div className='ui basic center aligned segment'>
                <a onClick={this.handleUpVote}>
                  <i className='large caret up icon'></i>
                </a>
                <p><b>{this.props.votes}</b></p>
                <a onClick={this.handleDownVote}>
                  <i className='large caret down icon'></i>
                </a>
              </div>
            </div>
            <div className='twelve wide column'>
              <div className='header'>
                <a href={this.props.url}>
                  {this.props.title}
                </a>
              </div>
              <div className='meta'>
                <span></span>
              </div>
              <div className='description'>
                <p>{this.props.description}</p>
              </div>
              <div className='extra'>
                <span>Submitted by:</span>
                <img
                  className='ui avatar image'
                  src={this.props.submitter_avatar_url}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});


ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);
