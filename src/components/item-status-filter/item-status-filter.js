import React from 'react';

class ItemStatusFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]


    render() {
        const filter = this.props.filter;
        const onFilterChange = this.props.onFilterChange
        const buttons = this.buttons.map(({ name, label }) => {

            //кнопка будет считатся активной ттогда, когда filter из пропса=name
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
            return <button type="button" className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}>{label}</button>
        })
        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

export default ItemStatusFilter;