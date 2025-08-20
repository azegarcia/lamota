from graphviz import Digraph

# Create the main flowchart
dot = Digraph(comment='WM Retail Workflow with Optional METRC Integration')

# Graph settings
dot.attr(rankdir='LR', size='8,5')

# Nodes
dot.node('A', 'Customer Places Order\n(Weedmaps or In-Store)', shape='ellipse', style='filled', fillcolor='lightgreen')
dot.node('B', 'Order Enters WM Retail\n(POS Dashboard)', shape='box', style='filled', fillcolor='lightblue')
dot.node('C', 'Inventory Updates\nin Real-Time', shape='box', style='filled', fillcolor='khaki')
dot.node('D1', 'Export Sales & Inventory Report\n(Manual Process)', shape='parallelogram', style='filled', fillcolor='orange')
dot.node('E1', 'Upload to METRC\n(Manual Entry/CSV)', shape='box', style='filled', fillcolor='red')

# Optional integration path
dot.node('D2', 'Send Data to METRC via\nThird-Party Integration (e.g., Canix)', shape='box', style='filled', fillcolor='lightcoral')

# Edges
dot.edge('A', 'B', label='Online or In-Person Order')
dot.edge('B', 'C', label='Real-time')
dot.edge('C', 'D1', label='Manual Report Export')
dot.edge('D1', 'E1', label='Compliance Upload')
dot.edge('C', 'D2', label='Optional Automation')

# Legend
with dot.subgraph(name='cluster_legend') as c:
    c.attr(label='Legend', style='dashed')
    c.node('L1', 'Manual Task', shape='parallelogram', style='filled', fillcolor='orange')
    c.node('L2', 'Automated Task', shape='box', style='filled', fillcolor='lightblue')
    c.node('L3', 'Optional Integration', shape='box', style='filled', fillcolor='lightcoral')

# Render the file
dot.render(format='png', filename='wm_retail_flowchart', cleanup=False)
