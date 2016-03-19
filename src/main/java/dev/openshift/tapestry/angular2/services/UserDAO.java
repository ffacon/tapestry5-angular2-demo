package dev.openshift.tapestry.angular2.services;


import dev.openshift.tapestry.angular2.entity.User;
import org.apache.tapestry5.hibernate.annotations.CommitAfter;

public interface UserDAO
{
    User getUserByLogin(String login);

    @CommitAfter
    void add(User user);

}
