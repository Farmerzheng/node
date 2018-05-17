// 利用elementUI实现的全局提示框

export const showMessage = function(message, type) {
    this.$message({
        message: message,
        type: type || 'success'
    });
}
export const showMessageBox = function(message, type, callback) {
    // console.log(this)
    type = type || 'warning'

    this.$confirm(message, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        // 删除成功后的回调
        callback();
        console.log('删除成功')
        this.$message({
            type: type,
            message: '删除成功!'
        });

    }).catch(() => {
        console.log('删除失败')
        this.$message({
            type: 'info',
            message: '已取消删除'
        });
    });
}