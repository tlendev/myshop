import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, useParams, Navigate, Params } from 'react-router-dom';
import ItemDescription from '../components/detailed/ItemDescription';
import { DetailedItem } from '../types';
import { RootState } from '../redux/store';

const mapStateToProps = (state: RootState) => ({
    shopItems: state.shop.shopItems,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
    params?: Params<string>;
    shopItems: Array<DetailedItem>;
}

type State = {
    redirect: boolean;
    currentItem: DetailedItem | undefined;
};

const withParams = (Component: React.ComponentType) => {
    return (props: any) => <Component {...props} params={useParams()} />;
};

class Detailed extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            redirect: false,
            currentItem: {
                uid: '',
                name: '',
                description: '',
                imagePath: '',
                priceInPLN: 0,
                quantityLeft: 0,
            },
        };
    }

    componentDidMount() {
        if (
            !this.props.shopItems ||
            !this.props.params ||
            !this.props.params.id ||
            !this.props.shopItems.find(
                (item) => item.uid === this.props.params!.id
            )
        ) {
            this.setState({
                redirect: true,
            });
        }
        this.setState({
            currentItem: this.props.shopItems!.find(
                (item) => item.uid === this.props.params!.id
            ),
        });
    }

    render() {
        return (
            <section className='container'>
                <ItemDescription item={this.state.currentItem!} />
                <Link to={'/'}>back to home</Link>
                {this.state.redirect && <Navigate to={'/*'} />}
            </section>
        );
    }
}

export default withParams(connector(Detailed));
