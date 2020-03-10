起因：一个视图下有好多job，新建一套微服务的job，完全可以用批量拷贝，然后改一些配置参数

脚本如下：

```python
#!/usr/bin/env python
# coding:utf-8

import jenkins
import sys

src_view = 'jxltz'
dest_view = 'jxyz'
old_branch = 'jxltz-csp-parent'
new_branch = 'jxyz-csp-parent'


def get_server_instance():
    jenkins_url = 'http://192.168.162.175:8080'
    server = jenkins.Jenkins(jenkins_url, username='admin', password='sdqc#2019#cqds')
    return server


def delete_job():
    server = get_server_instance()
    if server.view_exists(dest_view):
        server.delete_view(dest_view)
    else:
        print("view不存在")
    jobs = server.get_jobs()
    for job in jobs:
        if dest_view in job['name']:
            server.delete_job(job['name'])


def copy_job():
    server = get_server_instance()
    jobs = server.get_jobs(view_name=src_view)
    for job in jobs:
        job_name = job['name']
        newjob_name = job_name.replace(src_view, dest_view)
        if server.job_exists(newjob_name):
            print("job已存在")
        else:
            server.copy_job(job_name, newjob_name)
    configxml = server.get_view_config(src_view)
    newconfigxml = configxml.replace(src_view, dest_view)
    if server.view_exists(dest_view):
        print("view已存在")
    else:
        server.create_view(dest_view, newconfigxml)


def reconfig_job():
    server = get_server_instance()
    jobs = server.get_jobs(view_name=dest_view)
    for job in jobs:
        job_config = server.get_job_config(job['name'])
        new_job_config = job_config.replace(old_branch, new_branch)
        server.reconfig_job(job['name'], new_job_config)


def main():
    if sys.argv[1] == 'delete':
        delete_job()
    elif sys.argv[1] == 'copy':
        copy_job()
    elif sys.argv[1] == 'reconfig':
        reconfig_job()
    else:
        print("Usage: python %s delete|copy|reconfig" % sys.argv[0])


if __name__ == '__main__':
    main()
```

