export const getParentPath = (path) => {
  const aTemp = path.split('/');
  const oPath = aTemp.reduce((prev, current) => {
    const {aParentPath = [], sParent} = prev;
    const sCurrentParent = sParent && sParent !== '/' ? `${sParent}/${current}` : `/${current}`;
    current ? aParentPath.push(sCurrentParent) : []
    return {
      aParentPath,
      sParent: sCurrentParent,
    }
  }, {aParentPath: [], sParent: ''});
  // console.log('.....:', oPath.aParentPath)
  return oPath.aParentPath;
}