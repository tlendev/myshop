import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, Navigate, Params } from 'react-router-dom';
import ItemDescription from '../components/detailed/ItemDescription';
import { DetailedItem } from '../types';

type Props = {
    params?: Params<string>;
    shopItems?: Array<DetailedItem>;
};

type State = {
    redirect: boolean;
    currentItem: DetailedItem | undefined;
};

function withParams(Component: any) {
    return (props: Props) => <Component {...props} params={useParams()} />;
}

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

const mapStateToProps = (state: any) => ({
    shopItems: state.shop.shopItems,
});

const mapDispatchToProps = {};

const DetailedWithRedux = connect(
    mapStateToProps,
    mapDispatchToProps
)(Detailed);

export default withParams(DetailedWithRedux);
