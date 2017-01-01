walk(document);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;
	v = replace(v);
	textNode.nodeValue = v;
}

function replace(v) {
	v = v.replace(/\bDi Chen\b/g, "Master Di Chen");
	v = v.replace(/\bChen, Di\b/g, "Master Chen, Di");
	v = v.replace(/\bChen Di\b/g, "Master Chen Di");
	v = v.replace(/\bDi, Chen\b/g, "Master Di, Chen");
	v = v.replace(/\bdi chen\b/g, "master di chen");
	v = v.replace(/\bchen di\b/g, "master chen di");
	return v;
}
