import { Component } from 'react';
import { Item } from '../../types';
import { removeFromCart, setItemQuantity } from './cartSlice';
import { connect, ConnectedProps } from 'react-redux';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = { removeFromCart, setItemQuantity };

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
    item: Item;
    removeFromCart: ActionCreatorWithPayload<
        {
            uid: string;
        },
        string
    >;
    setItemQuantity: ActionCreatorWithPayload<
        {
            uid: string;
            quantity: number;
        },
        string
    >;
}

type State = {};

class CartItem extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <div className='container cart__item'>
                <div className='cart__cell'>
                    <p>
                        {this.props.item.quantity} X {this.props.item.name}
                    </p>
                    <p>{this.props.item.priceInPLN} PLN Each</p>
                </div>
                <div className='cart__cell quantity_controls'>
                    <input
                        type='number'
                        value={this.props.item.quantity}
                        onChange={(e) => {
                            this.props.setItemQuantity({
                                uid: this.props.item.uid,
                                quantity: parseInt(e.target.value),
                            });
                        }}
                    />
                </div>
                <div className='cart__cell'>
                    <p>
                        {this.props.item.priceInPLN * this.props.item.quantity}{' '}
                        PLN total
                    </p>
                    <button
                        onClick={(e) =>
                            this.props.removeFromCart({
                                uid: this.props.item.uid,
                            })
                        }
                    >
                        Remove from cart
                    </button>
                </div>
            </div>
        );
    }
}

export default connector(CartItem);
