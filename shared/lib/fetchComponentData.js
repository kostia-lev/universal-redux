export default function fetchComponentData(dispatch, components, params) {
    const needs = components.reduce( (prev, current) => {
        console.log(current);
        //console.log(needs);
        return (current.needs || [])
            //.concat((current.WrappedComponent ? current.WrappedComponent.needs : []) || [])
            .concat(prev);
    }, []);

    //console.log(needs);

    const promises = needs.map(need => dispatch(need(params)));
    return Promise.all(promises);
}