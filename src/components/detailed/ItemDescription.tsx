import { Component } from 'react';
import { DetailedItem, Item } from '../../types';
import { addToCart } from '../cart/cartSlice';
import { connect, ConnectedProps } from 'react-redux';
import './itemDescription.css';
import { RootState } from '../../redux/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = { addToCart };

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
    item: DetailedItem;
    addToCart: ActionCreatorWithPayload<Item, string>;
}

type State = {
    selectedQuantity: number;
};

class ItemDescription extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedQuantity: 1,
        };
    }

    render() {
        return (
            <div className='container description__container'>
                <div className='img__container detailed__cell'>
                    <img
                        src={`/img/${this.props.item.imagePath}`}
                        alt={this.props.item.name}
                    />
                </div>
                <div className='detailed__cell'>
                    <h3>{this.props.item.name}</h3>
                    <p>Description:</p>
                    <p>{this.props.item.description}</p>
                </div>
                <div className='detailed__cell'>
                    <p>Price: {this.props.item.priceInPLN} PLN</p>
                    <p>{this.props.item.quantityLeft} left</p>
                    <input
                        type='number'
                        value={this.state.selectedQuantity}
                        onChange={(e) =>
                            this.setState({
                                selectedQuantity: parseInt(e.target.value),
                            })
                        }
                    />
                    <button
                        onClick={(e) =>
                            this.props.addToCart({
                                uid: this.props.item.uid,
                                name: this.props.item.name,
                                priceInPLN: this.props.item.priceInPLN,
                                quantity: this.state.selectedQuantity,
                            })
                        }
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}

export default connector(ItemDescription);
